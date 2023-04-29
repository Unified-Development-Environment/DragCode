# DragCode
A Visual Programming based frontend for coding embedded systems.  

## Introduction

Visual programming, a programming paradigm like any other, is an exercise of programming using editable graphical components instead of writing textual code. It leverages the ability to design application programs via blocks, dataflow nodes, icons, etc. In contrast to the traditional text-based coding, this paradigm makes programming more accessible to a wider audience, including those without technical programming knowledge. Visual programming tools and platforms are often used to teach coding to school-level students as well as in lucrative businesses like video game design, robotic simulations, web design, etc. Scratch by MIT [5] and Blockly by Google [6] are two examples of visual programming languages. The value of visual programming lies in its ability to distill complex programming concepts into basic, intuitive visual elements that are easier for newcomers to understand and apply and users generally have a pleasant experience working with such frameworks.

The frontend implementation is a block based visual development environment, complete with basic simulation and debugging capabilities. With a variety of functions, the interface is meant to be user-friendly and accessible to both novice and expert users. Instead of reinventing the wheel, we have *incorporated a custom forked version of Microsoft's MakeCode Environment, which is built on Google's well-established Blockly framework.*

![Visual Development Environment with LED Blink Code](https://user-images.githubusercontent.com/42208057/235294758-60859e1c-6529-4fa2-96ed-98d0e6ed8296.png)

Our development environment hosts five basic components,  the Blocks Editor, Language Editor, Simulator & Debugger, Extensions Library and a Documentation Tab.
The Blocks editor is where the user can interactively develop code by “dragging” blocks onto the editor workspace. Blocks represent coding actions and programming structures that would traditionally be written in text. Coding elements such as loops, conditional statements, and events are containing blocks with other blocks fitting inside. Functions and assignments are “flat” blocks that fit into others. Variables, values, and properties are mini-blocks that fit into slots of functions, assignments, or evaluators.

The language editor complements the Blocks editor in MakeCode. When blocks are defined for functions, statements, and assignments, the code matching them in the Language editor will represent the corresponding blocks in the Blocks editor. In the Language editor, however, a user can write additional code with greater complexity than what is available with blocks.

The simulator is meant to allow the user to simulate basic board actions before going through the tedious process of having to flash the code on target. 
The debugger allows for the code to be analyzed using breakpoints, allowing users to walk through their programme and observe the state of variables and other programme components.

The Extension tab hosts numerous libraries that may be easily imported, each of which capicates the existing code with the other supported boards. Extensions are written in standard typescript and included in the target-configuration file.Adding an extension also unlocks the board specific blocks that the user may leverage for their project. The documentation section contains simplified microcontroller layout, block definitions and more ease of use text. 

The goal of creating a visual programming environment, along with a unified HAL is to offer an accessible and intuitive approach to embedded programming. With the help of visual interfaces and drag-and-drop tools, even those without technical programming knowledge can easily create programs. Unified HAL, on the other hand, allows seasoned developers to focus on the rationale and functionality of their application rather than technical minutiae, thus simplifying the development lifecycle, enhancing portability, and reducing the complexity of embedded programming.
