import React,{useState} from "react";
import"./accordion.css";

 const Accordion=()=>{
    const[openIndex,setOpenIndex]=useState(null);
    const faqData=[
        {question:"what AI stands for?",answer:"AI stands for artificial intelligence"},
        {question:"what is react?",answer:"React is a javascript library"},
        {question:"which is the national bird of india?",answer:"peacock is thenatonal bird of india"},
    ];

    const toggleAccordion=(index)=>{
        setOpenIndex(openIndex==index?null:index);
    };

      return (
    <div className="accordion">
      {faqData.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-question-container">
            <span className="accordion-question">{item.question}</span>
            
            {openIndex !== index && (
              <button onClick={() => toggleAccordion(index)} className="expand-btn">
                🔽
              </button>
            )}
          </div>

        
          {openIndex === index && (
            <div className="accordion-answer-container">
              <span className="accordion-answer">{item.answer}</span>
              <button onClick={() => toggleAccordion(index)} className="remove-btn">
                ➖
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;