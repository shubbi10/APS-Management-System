//import
import React from "react";
import "../Teacher/CSS/TeacherProfile.scss";
import Quiz from 'react-quiz-component';    
import Sidebar from "../../GlobalFiles/Sidebar";
import "./CSS/Profiles.scss";

const Nurse_Profile = () => {
  const quiz =  {
  "quizTitle": "Student Quiz",
  "quizSynopsis": "Hi Student's this is a quiz about how much have you learn in your curriculum and you yourself  would get to know how much you have scored in it. BEST OF LUCK ",
  "nrOfQuestions": "4",
  "questions": [
    {
      "question": "How can you access the state of a component from inside of a member function?",
      "questionType": "text",
      //"questionPic": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fyoung-student-writing-code&psig=AOvVaw2nh-29WSoc77JAKGiKnZ0f&ust=1708255122186000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIjt3rKgsoQDFQAAAAAdAAAAABAE", // if you need to display Picture in Question
      "answerSelectionType": "single",
      "answers": [
        "this.getState()",
        "this.prototype.stateValue",
        "this.state",
        "this.values"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "To access the state of a component from inside of a member function, you can use the this.state keyword.",
      "point": "20"
    },
    {
      "question": "ReactJS is developed by _____?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Google Engineers",
        "Facebook Engineers",
        "Twitter Engineers"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "React was created by Jordan Walke, a software engineer at Facebook. He was inspired by the functional programming language Lisp and sought to create a library that would allow developers to create reusable components that could be easily combined to build complex user interfaces",
      "point": "20"
    },
    {
      "question": "ReactJS is an MVC based framework?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "True",
        "False"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "No, React is not an MVC framework. React is a JavaScript library for building user interfaces. It does, however, provide Flux architecture, which is a pattern that can be used to implement MVC in React applications.",
      "point": "10"
    },
    {
      "question": "Which of the following concepts  are key to ReactJS?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Virtual DOM",
        "LifeCycle-Method",
        "State Management",
        "Both of the above",
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "React most essential concepts JSX, class and function components, props, state, lifecycle methods, and hooks.",
      "point": "30"
    },
    {
      "question": "What is the most famous web devlopment framework,",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Angular",
        "React",
        "Rail",
        "Ember"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "This framework by Facebook is considered one of the top web frameworks for frontend development. React is JavaScript-based, open-source, and high-in-demand to construct robust, high-performance web applications",
      "point": "20"
    },
    {
      "question": "What are the advantages of React JS?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "React can be used on client and as well as server side too",
        "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
        "React components have lifecycle events that fall into State/Property Updates",
        "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
      ],
      "correctAnswer": [1, 2, 4],
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "This framework by Facebook is considered one of the top web frameworks for frontend development. React is JavaScript-based, open-source, and high-in-demand to construct robust, high-performance web applications",
      "point": "20"
    },
  ]
}; 

  return (
    <>
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="maindoctorProfile">
          <Quiz quiz={quiz} shuffle={true}/>

          </div>
        </div>
      </div>
    </>
  );
};
// export Quiz 
export default Nurse_Profile;
