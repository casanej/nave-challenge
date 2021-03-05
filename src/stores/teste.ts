import { WebsiteThemeSupported } from "assets";

export class Teste {
    changeTheme = (theme: WebsiteThemeSupported) => {
        localStorage.setItem('websiteTheme', theme);
        window.__theme__.type = theme;
    }
}