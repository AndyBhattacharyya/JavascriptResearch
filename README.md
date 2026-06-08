# Goal
- typescript configuration that will allow me to develop both backend & front-end javascript that is dedicated for nodejs and web browser
- For js files that target the nodejs runtime, I want to 
- `ts` files can compile into `js` in some separate directory, but what about executing ts directly

[rewriteRelativeImportExtensions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-7.html#path-rewriting-for-relative-paths:~:text=option%20called%20%2D%2D-,rewriteRelativeImportExtensions,-.%20When%20an%20import) vs [allowImportingTsExtensions](https://www.typescriptlang.org/tsconfig/#allowImportingTsExtensions)

- Set up node types for lsp
```
npm i --save-dev @types/node


app/
	tsconfig.json
	node_modules
	
	test/
	client/
	server/	
	
```
