# Chat Form

> A React component presenting complex forms in a conversational way. Simple, clear, separate user concerns, and reduce filling anxiety.

[![core npm version](https://img.shields.io/npm/v/@chat-form/core.svg?label=core)](https://www.npmjs.com/package/@chat-form/core)
[![animations npm version](https://img.shields.io/npm/v/@chat-form/animations.svg?label=animations)](https://www.npmjs.com/package/@chat-form/animations)
[![Test](https://github.com/chat-form/monorepo/actions/workflows/test.yaml/badge.svg)](https://github.com/chat-form/monorepo/actions/workflows/test.yaml)

[CodeSandBox Live Demo](https://codesandbox.io/s/sequencecard-demo-r3cxcm)

### Install

```
npm i --save @chat-form/core
```

### Basic Usage

```jsx
import { SequenceCard } from "@chat-form/core";

export default () => <SequenceCard steps={steps} />;
```

### Use Built-in Animations

```jsx
import { SequenceCard } from "@chat-form/core";
import { slideIn } from "@chat-form/animations/slideIn";

export default () => <SequenceCard steps={steps} animations={slideIn()} />;
```

See more examples at [chat-form.io](/SequenceCard)
