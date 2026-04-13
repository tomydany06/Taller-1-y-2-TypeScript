export class Serie {
    id;
    name;
    channel;
    seasons;
    description;
    serieUrl;
    imageUrl;
    constructor(id, name, channel, seasons, description, serieUrl, imageUrl) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.serieUrl = serieUrl;
        this.imageUrl = imageUrl;
    }
}