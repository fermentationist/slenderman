import SvelteApp from "./App.svelte";

const App = new SvelteApp({
    target: document.body,
    props: { 
        welcomeMessage: `Edit "/src/App.svelte" and "/src/index.js" to make changes.`
    }
});

export default App;