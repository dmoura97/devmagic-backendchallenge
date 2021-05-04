import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("summoners")
class Player {
  @PrimaryColumn()
  id?: string;

  @Column()
  nickname: string;

  @Column()
  accountId: string;

  @Column()
  summonerLevel: number;

  @Column()
  profileIconId: number;

  @Column()
  summonerId: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Player };
