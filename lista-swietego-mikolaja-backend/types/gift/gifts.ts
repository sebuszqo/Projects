import {GiftEntity} from "./gitf.entity";

export type CreateGiftRequest = Omit<GiftEntity, 'id'>