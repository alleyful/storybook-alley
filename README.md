# Storybook Start

## storybook project start guide
```
mkdir storybook-tutorial
cd storybook-tutorial
yarn init -y
npx -p @storybook/cli sb init --type react
yarn storybook
```

- 스토리 디렉토리 변경
root경로에 src 추가 후 stories를 src 안으로 넣기
.storybook > config.js 에 경로 변경
```
configure(require.context('../stories', true, /\.stories\.js$/), module);
->
configure(require.context('../src', true, /\.stories\.js$/), module);
```