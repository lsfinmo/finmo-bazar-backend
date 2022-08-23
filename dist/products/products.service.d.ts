import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsDto, ProductPaginator } from './dto/get-products.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { GetPopularProductsDto } from './dto/get-popular-products.dto';
export declare class ProductsService {
    private products;
    create(createProductDto: CreateProductDto): Product;
    getProducts({ limit, page, search }: GetProductsDto): ProductPaginator;
    getProductBySlug(slug: string): Product;
    getPopularProducts({ limit, type_slug }: GetPopularProductsDto): Product[];
    update(id: number, updateProductDto: UpdateProductDto): Product;
    remove(id: number): string;
}
