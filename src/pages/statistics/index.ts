import Page from "../../core/templates/page";

class StatisticsPage extends Page {
    static TextObject = {
        MainTitle: 'StatisticsPage',
    }

    constructor(id: string) {
        super(id);
    }

    render() {
        const headerTitle = this.createHeaderTitle(StatisticsPage.TextObject.MainTitle);
        this.container.append(headerTitle);
        return this.container;
    }
}

export default StatisticsPage;
