/**
 * @title Animations
 * @description We offer some built in animations for you to choose. You can also customize your own animations.
 */

import React, { useRef } from "react";
import { SequenceCard } from "@chat-form/core";
import { slideDown } from "@chat-form/animations/slideDown";
import type { Ref } from "@chat-form/core/components/SequenceCard";
import styles from "./index.module.css";
import { Radio, Card, Space } from "antd";
import { ad, defaultQuestion } from "./mock/data";
import { flushSync } from "react-dom";

export default () => {
  const [question, setQuestion] = React.useState<typeof ad>(defaultQuestion);
  const ref = useRef<Ref | null>(null);

  const pushRandomQuestion = () => {
    const id = `${question.length}`;
    flushSync(() => {
      setQuestion((s) => [
        ...s,
        {
          id,
          question: `New Question ${id}`,
          answers: [
            {
              name: "yes",
              key: "yes",
              next: "",
            },
          ],
        },
      ]);
    });
    return id;
  };

  return (
    <div style={{ overflow: "auto" }}>
      <SequenceCard
        ref={ref}
        containerStyle={{ marginTop: 12 }}
        containerClassName={styles.demo}
        steps={question.map((ele) => {
          return {
            id: ele.id,
            renderStep: (ctx) => {
              return ctx.isActive ? (
                <Card title={ele.question}>
                  <Radio.Group
                    buttonStyle="solid"
                    className={styles.options}
                    style={{ width: "100%" }}
                  >
                    <Space direction="vertical">
                      {ele.answers.map((i) => {
                        return (
                          <Radio.Button
                            onClick={() => {
                              const id = pushRandomQuestion();
                              ctx.gotoStep(id);
                            }}
                            key={i.key}
                            value={i.key}
                          >
                            {i.name}
                          </Radio.Button>
                        );
                      })}
                    </Space>
                  </Radio.Group>
                </Card>
              ) : (
                <Card
                  extra={<div onClick={() => ctx.gotoStep(ele.id)}>Edit</div>}
                  title={ele.question}
                >
                  Done
                </Card>
              );
            },
          };
        })}
        animation={slideDown()}
        scrollFn={(dom) => {
          dom.parentElement?.scrollTo({
            top: dom.offsetTop,
            behavior: "smooth",
          });
        }}
      />
    </div>
  );
};
