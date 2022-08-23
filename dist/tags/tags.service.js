"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsService = void 0;
const common_1 = require("@nestjs/common");
const paginate_1 = require("../common/pagination/paginate");
const tag_entity_1 = require("./entities/tag.entity");
const tags_json_1 = __importDefault(require("./tags.json"));
const class_transformer_1 = require("class-transformer");
const tags = (0, class_transformer_1.plainToClass)(tag_entity_1.Tag, tags_json_1.default);
let TagsService = class TagsService {
    constructor() {
        this.tags = tags;
    }
    create(createTagDto) {
        return Object.assign({ id: this.tags.length + 1 }, createTagDto);
    }
    findAll({ page, limit }) {
        if (!page)
            page = 1;
        const url = `/tags?limit=${limit}`;
        return Object.assign({ data: this.tags }, (0, paginate_1.paginate)(this.tags.length, page, limit, this.tags.length, url));
    }
    findOne(id) {
        return `This action returns a #${id} tag`;
    }
    update(id, updateTagDto) {
        return this.tags[0];
    }
    remove(id) {
        return `This action removes a #${id} tag`;
    }
};
TagsService = __decorate([
    (0, common_1.Injectable)()
], TagsService);
exports.TagsService = TagsService;
//# sourceMappingURL=tags.service.js.map