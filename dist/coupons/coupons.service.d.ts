import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { Coupon } from './entities/coupon.entity';
import { GetCouponsDto } from './dto/get-coupons.dto';
export declare class CouponsService {
    private coupons;
    create(createCouponDto: CreateCouponDto): Coupon;
    getCoupons({ search, limit, page }: GetCouponsDto): {
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
        data: Coupon[];
    };
    getCoupon(id: number): Coupon;
    update(id: number, updateCouponDto: UpdateCouponDto): Coupon;
    remove(id: number): string;
    verifyCoupon(code: string): {
        is_valid: boolean;
        coupon: {
            id: number;
            code: string;
            description: any;
            image: {
                id: number;
                original: string;
                thumbnail: string;
            };
            type: string;
            amount: number;
            active_from: string;
            expire_at: string;
            created_at: string;
            updated_at: string;
            deleted_at: any;
            is_valid: boolean;
        };
    };
}
