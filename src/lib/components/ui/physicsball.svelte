<script>
  import { onMount } from "svelte";
  // @ts-ignore
  import Matter from "matter-js";
  // @ts-ignore
  import MatterAttractors from "matter-attractors";

  const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Body } =
    Matter;

  Matter.use(MatterAttractors);

  // @ts-ignore
  const colors = ["#1E375C", "#FF613F"]; // Colors from the provided palette

  // @ts-ignore
  const createCenterAttractor = (center) => {
    // @ts-ignore
    return function (bodyA, bodyB) {
      const forceMagnitude = 0.00008; // Force magnitude for stronger attraction
      const force = {
        x: (center.x - bodyB.position.x) * forceMagnitude,
        y: (center.y - bodyB.position.y) * forceMagnitude,
      };
      Body.applyForce(bodyB, bodyB.position, force);
    };
  };

  const createBallAttractor = () => {
    // @ts-ignore
    return function (bodyA, bodyB) {
      if (bodyA === bodyB) return;

      const forceMagnitude = 0.00004; // Smaller force magnitude for ball-to-ball attraction
      const distance = Math.sqrt(
        Math.pow(bodyA.position.x - bodyB.position.x, 2) +
          Math.pow(bodyA.position.y - bodyB.position.y, 2)
      );
      const force = {
        x: ((bodyA.position.x - bodyB.position.x) / distance) * forceMagnitude,
        y: ((bodyA.position.y - bodyB.position.y) / distance) * forceMagnitude,
      };
      Body.applyForce(bodyB, bodyB.position, force);
    };
  };

  onMount(() => {
    const engine = Engine.create();
    const canvasWidth = window.innerWidth / 2;
    const canvasHeight = window.innerHeight;
    const render = Render.create({
      element: document.getElementById("physics-balls"),
      engine: engine,
      options: {
        width: canvasWidth,
        height: canvasHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    const ballsize = 65;
    const ballcount = 7;
    const center = { x: canvasWidth / 2 - 50, y: canvasHeight / 2 - 140 };
    const centerAttractor = createCenterAttractor(center);
    const ballAttractor = createBallAttractor();

    const balls = [];
    for (let i = 0; i < ballcount; i++) {
      const ball = Bodies.circle(
        Math.random() * canvasWidth,
        Math.random() * canvasHeight,
        ballsize,
        {
          restitution: 0.1,
          render: {
            fillStyle: "#1E375C",
          },
          plugin: {
            attractors: [centerAttractor, ballAttractor],
          },
        }
      );
      balls.push(ball);
    }

    for (let i = 0; i < ballcount; i++) {
      const ball = Bodies.circle(
        Math.random() * canvasWidth,
        Math.random() * canvasHeight,
        ballsize,
        {
          restitution: 0.1,
          render: {
            fillStyle: "#FF613F",
          },
          plugin: {
            attractors: [centerAttractor, ballAttractor],
          },
        }
      );
      balls.push(ball);
    }

    const ground = Bodies.rectangle(
      canvasWidth / 2,
      canvasHeight - 45,
      canvasWidth,
      50,
      {
        isStatic: true,
        render: { visible: false },
      }
    );

    const top = Bodies.rectangle(canvasWidth / 2, 0, canvasWidth, 10, {
      isStatic: true,
      render: { visible: false },
    });
    const leftWall = Bodies.rectangle(-25, canvasHeight / 2, 50, canvasHeight, {
      isStatic: true,
      render: { visible: false },
    });
    const rightWall = Bodies.rectangle(
      canvasWidth + 5,
      canvasHeight / 2,
      50,
      canvasHeight,
      {
        isStatic: true,
        render: { visible: false },
      }
    );

    World.add(engine.world, [...balls, ground, leftWall, rightWall, top]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.world, mouseConstraint);

    Engine.run(engine);
    Render.run(render);

    // Debugging to ensure all balls are being affected
    // @ts-ignore
    engine.world.bodies.forEach((body, index) => {
      if (body.label === "Circle Body") {
        console.log(
          `Ball ${index}: Position (${body.position.x}, ${body.position.y})`
        );
      }
    });
  });
</script>

<div id="physics-balls"></div>

<style>
  #physics-balls {
    width: 100%;
    height: 100vh;
    position: relative;
  }
</style>
