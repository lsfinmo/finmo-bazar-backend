import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategoriesDto } from './dto/get-categories.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    create(createCategoryDto: CreateCategoryDto): Category;
    findAll(query: GetCategoriesDto): {
        count: number;
        currentPage: number;
        firstItem: number;
        lastItem: number;
        lastPage: number;
        perPage: number;
        total: number;
        first_page_url: string;
        last_page_url: string;
        next_page_url: string;
        prev_page_url: string;
        data: Category[];
    };
    findOne(id: string): Category;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Category;
    remove(id: string): string;
}
