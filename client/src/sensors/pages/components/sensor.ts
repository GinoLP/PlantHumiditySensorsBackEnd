import * as Buffer from "buffer";

class Sensor {
    name: string;
    plantName: string;
    minHumidity: number;
    maxHumidity: number;
    currentHumidity: number;
    plantPicture: any;

    constructor(name : string, plantName: string, minHumidity: number, maxHumidity: number,
                currentHumidity: number ,plantPicture: Buffer) {
        this.name = name;
        this.plantName = plantName;
        this.minHumidity = minHumidity;
        this.maxHumidity = maxHumidity;
        this.currentHumidity = maxHumidity;
        this.plantPicture = this.bufferToPicture(plantPicture);

    }

    bufferToPicture(buff: Buffer){
        return buff.reduce((data, byte) => data + String.fromCharCode(byte), '')
    }
}

export default Sensor;