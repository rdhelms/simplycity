class WelcomeScreen extends HTMLElement {
	constructor() {
		super();
		this.initialized = false;
	}

	connectedCallback() {
		importLinks('welcome-screen', this);
	}
}

customElements.define('welcome-screen', WelcomeScreen);