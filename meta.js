{
    "prompts": {
        "name": {
            "type": "string",
            "required": true,
            "message": "defed vue components name, like: defed-vue-picker"
        },
        "text": {
            "type": "string",
            "required": true,
            "message": "组件中文名称，如：选择器"
        },
        "demoUrl": {
            "type": "string",
            "required": false,
            "message": "组件的demo地址，现在没有，但之后最好补上。demo由组件开发者自行维护"
        },
        "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev"
    }
}