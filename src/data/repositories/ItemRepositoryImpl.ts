import { Item } from "../../domain/entities/Item";
import { ItemRepository } from "../../domain/repositories/ItemRepository";

class ItemDTO {
  id: number = 0;
  text: string = "";
}

export class ItemRepositoryImpl implements ItemRepository {
  
  todo = [{
    "id": 1,
    "text": "Kani na Todo"
  }, {
    "id": 2,
    "text": "Todo 2"
  }]

  async GetItems(): Promise<Item[]> {
    var jsonString = JSON.stringify(this.todo)
    var res = JSON.parse(jsonString)
    return res.map((item: ItemDTO) => new Item(item.id, item.text));
  }
}
