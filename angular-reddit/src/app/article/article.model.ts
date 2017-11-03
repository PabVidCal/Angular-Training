export class Article {
    title: string;
    link: string;
    votes: number;

    // ? set the parameter to optional
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        // With || we are setting the default value to 0
        this.votes = votes || 0;
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }

    //domain() is a utility function that extracts the domain from an URL
    domain(): string {
        try {
            // e.g. http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
            // now: foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch(err){
            return null;
        }
    }
}