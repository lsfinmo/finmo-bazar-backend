import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';
import { Attribute } from './entities/attribute.entity';
export declare class AttributesService {
    private attributes;
    create(createAttributeDto: CreateAttributeDto): Attribute;
    findAll(): Attribute[];
    findOne(id: number): Attribute;
    update(id: number, updateAttributeDto: UpdateAttributeDto): Attribute;
    remove(id: number): string;
}
