import { Suspense } from "react";
import ShopContent from "./shopContent";

export default function ShopPage() {
    return (
        <Suspense
            fallback={
                <div className="loader-container">
                    <span className="loader"></span>
                </div>
            }
        >
            <ShopContent />
        </Suspense>
    );
}