# Chat Form

> 使用对话的形式呈现复杂表单的 React 组件。简单、清晰、分离用户关注点、减少填写焦虑。

[![core npm version](https://img.shields.io/npm/v/@chat-form/core.svg?label=core)](https://www.npmjs.com/package/@chat-form/core)
[![animations npm version](https://img.shields.io/npm/v/@chat-form/animations.svg?label=animations)](https://www.npmjs.com/package/@chat-form/animations)
[![Test](https://github.com/chat-form/monorepo/actions/workflows/test.yaml/badge.svg)](https://github.com/chat-form/monorepo/actions/workflows/test.yaml)

[CodeSandBox 示例](https://codesandbox.io/s/sequencecard-demo-r3cxcm)

### 安装

```
npm i --save @chat-form/core
```

### 基本用法

```jsx
import { SequenceCard } from "@chat-form/core";

export default () => <SequenceCard steps={steps} />;
```

### 使用内置动画

```jsx
import { SequenceCard } from "@chat-form/core";
import { slideIn } from "@chat-form/animations/slideIn";

export default () => <SequenceCard steps={steps} animations={slideIn()} />;
```

更多例子请参考 [chat-form.io](/SequenceCard)
