import Page from "../../core/templates/page";


export const enum ErrorTypes {
    Error_404 = '404',
}


class ErrorPage extends Page {
    private errorType: ErrorTypes | string;

    static TextObject = {
        '404': 'Error, page not found :(',
    }

    constructor(id: string, errorType: ErrorTypes | string) {
        super(id);
        this.errorType = errorType;
    }

    render() {
        const title = this.createHeaderTitle(ErrorPage.TextObject["404"]);
        this.container.append(title)
        return this.container;
    }
}

export default ErrorPage;
