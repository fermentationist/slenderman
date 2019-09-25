
<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Logic (JavaScript)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<script>
    /* 
    This variable is an example of how "props" are used to pass data. Please delete along with {welcomeMessage} in markup below 
    */
    export let welcomeMessage = "NO PROPS PASSED.";// the value of welcomeMessage will be received by the component as "props", or else it will take the default value, "NO PROPS PASSED."
    
</script>


<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Styles (CSS)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
<style>
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
    /* Some useful global styles (you may want to keep or add to) */
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
	:global(body) { /* syntax to apply global styles in Svelte */
		box-sizing: border-box;
		scroll-behavior: smooth;
        outline: none;
        padding: 0;
		margin: 0;
		text-rendering: optimizeLegibility;
    }
    :global(*, *:before, *:after) {
		box-sizing: inherit;
	}
	:global(a) {
		text-decoration: none;
		color: inherit;
    }
    
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
    /* Styling for welcome message; please delete along with message in markup */
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
    .thinner-welcome-message {
        background-color: rgb(20, 22, 18);
        width: 100vw;
        height: 100vh;
        color: coral;/*rgb(185, 160, 185);*/
        font-family: Lato, sans-serif;
        font-size: 1.5em;
        padding: 25vh 24vw;
        letter-spacing: 0.25em;
        line-height: 2em;
    }
    p {
        max-width: 50vw;
    }
    h2 {
        font-family: Futura, sans-serif;
    }
    .italic {
        font-style: italic;
    }
    .small-caps {
        font-variant: small-caps;
        font-size: 1.33em;
    }
    /*∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞*/
</style>


<!-- 
••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••
    Component Markup (HTML template)
ºººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººººº
 -->
 <!-- example markup, okay to delete -->
<div class="thinner-welcome-message">
    <h2>Hey.</h2>
    <p>This is a Svelte app. More on Svelte at <a href="https://svelte.dev" class="small-caps">svelte.dev</a>.</p>
    <p>
        <span>You should be good-to-go. </span>
        <span class="italic">
            {welcomeMessage}<!-- inserted value from the "props" passed to the component-->
        </span>
    </p>
</div><!--.welcome-message-->-->   

    