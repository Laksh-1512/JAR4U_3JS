# Jar4u web dev hiring assignment

We've devised this assignment to test your ability to learn, explore creativity & build to ship fast.

## CONTEXT 
We believe that e-commerce - one of the largest markets globally- is now poised to change. With the latest advances in AI & 3D technology, we can move from passive image based shopping to an interactive shopping experience online. This assignment allows you to work on one such feature- you have a 3D model of a product that is to be sold online. Unleash your creativity to showcase the product in the best way such that it helps customers in making their purchase decision. We have shared a specific functionality to get you started but the main assignment is to unleash your imaginatoion & build a glimpse of how you would like to shop online.

Here are the steps you need to follow:

1. Setup on Local: First, set up the project locally. Follow the instructions to setup (as mentioned below) to install the necessary dependencies and run the project. You should see an interactive natraj as shown in the first_setup.png image. This 3D is loaded from ./public/natraj.splat file. We have shared two 3D models with you- a natraj statue (natraj.splat) & a ring (ring.splat) to start with- in the final showcase, you should at least use one of these. Installation steps:

Step - 1 Install the libraries via: `npm i`
Step - 2 To start, run command: `npm start`

2. Auto-rotation of Object: In the provided code, you will find a SPLAT component that loads the 3D model. Your first task is to implement an auto-rotation functionality so that as soon as you load the page, your loaded model is continuously rotating. Useful resource: https://github.com/pmndrs/drei
[Hint: Implementation is super small & simple. Once you find it, it will take less than a minute.]

3. Replicate the GlassBox Showcase as in the video: We have shared a video 'glassbox_showcase.mp4' Carefully study the attached video and try to replicate a similar showcase functionality on top of our objects- natraj or ring.This may include finding a 3D mesh for a glass box online or creating a new glassbox via Cube elements along with our splat code, adding lighting, etc.
Hint: No need to replicate the stand below the glassbox in the video.

4. Show Your Creativity: This is where you can shine! Implement additional creative functionalities to enhance the user experience, or revamp the whole screen as you would imaging future of online shopping should look like. You could add interactivity (e.g., click or hover effects), incorporate animations, or introduce new 2D, video, 3D elements to the scene. Or you may remove all the clutter - keep the object very clean & add popups with details about various parts of the object. Feel free to explore and experiment with the capabilities of React Three Fiber & drei. 
Hint: These are just some directions, you may get more ideas by talking to Gemini or ChatGPT. We're excited to see your imagination come to life!

We recommend referring to the React Three Fiber documentation and examples available at https://docs.pmnd.rs/react-three-fiber/getting-started/examples to assist you in this assignment. These resources will provide a solid understanding of the library and its features.

Once you have completed the assignment, please take screenshots/screenrecording of your results & share that with your code. [Don't zip node_modules while sharing the code- just add instructions to replicate the project]

If you have any questions or need further clarification, contact us via the assignment mail. Someone from the team will reach out.

Best of luck!
