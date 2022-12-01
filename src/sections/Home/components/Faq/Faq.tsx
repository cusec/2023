import React, { ReactElement, useState } from "react";
import type { FAQType } from "../../../../types";
import "./Faq.scss";

interface Props {
  faqs: FAQType[];
}

interface QuestionProps {
  open: boolean;
  id: string;
  children: string;
  onToggle: () => void;
}

interface AnswerProps {
  id: string;
  open: boolean;
  children: ReactElement | string;
}

export const Question = ({ open, id, children, onToggle }: QuestionProps) => {
  return (
    <dt>
      <div className="Question">
        <button aria-expanded={open} aria-controls={id} onClick={onToggle}>
          <p className="QuestionContent">
            <span>{children}</span>
            <span>
              <i className="fa-solid fa-plus fa-xs"></i>
            </span>
          </p>
        </button>
      </div>
    </dt>
  );
};

export const Answer = ({ id, open, children }: AnswerProps) => (
  <dd>
    <p className={open ? undefined : "AnswerHidden"} id={id}>
      {children}
    </p>
  </dd>
);

export const FAQ = ({ faqs }: Props) => {
  const [open, setOpen] = useState<number[]>([]);

  const isOpen = (id: number) => {
    return open.includes(id) ? true : false;
  };

  const handleToggle = (id: number) => {
    if (open.includes(id)) {
      setOpen(open.filter((faqId) => faqId !== id));
    } else {
      setOpen([...open, id]);
    }
  };

  return (
    <dl>
      {faqs.map(({ id, question, answer }) => {
        const formattedId = `${id}`;
        const showAnswer = isOpen(id);

        return (
          <>
            <Question
              open={showAnswer}
              id={formattedId}
              onToggle={() => handleToggle(id)}
              key={`Q${id}`}
            >
              {question}
            </Question>
            <Answer id={formattedId} open={showAnswer} key={`A${id}`}>
              {answer}
            </Answer>
          </>
        );
      })}
    </dl>
  );
};
