import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
    private ninjas = [
        { id: 1, name: 'ninjaA', weapon: 'sword'},
        { id: 2, name: 'ninjaB', weapon: 'nunchucks'}
    ]

    getNinjas(weapon?: string) {
        if (weapon) {
            return this.ninjas.filter((ninja) => ninja.weapon === weapon);
        }

        return this.ninjas;
    }
}
