export class Serie {
    id;
    name;
    channel;
    seasons;
    description;
    imageUrl;
    serieUrl;
    constructor(id, name, channel, seasons, description, imageUrl, serieUrl) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.imageUrl = imageUrl;
        this.serieUrl = serieUrl;
    }
}