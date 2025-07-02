import React, { useState } from "react"
import type { ProductCategory } from "./types"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

interface ProductGridProps {
    categories: ProductCategory[]
}

export const ProductLister: React.FC<ProductGridProps> = ({ categories }) => {
    const [open, setOpen] = useState(false)
    const [currentImages, setCurrentImages] = useState<{ src: string, title?: string }[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleImageClick = (categoryIndex: number, imageIndex: number) => {
        const images = categories[categoryIndex].products.map((p) => ({
            src: p.image,
            title: p.name,
        }))
        setCurrentImages(images)
        setCurrentIndex(imageIndex)
        setOpen(true)
    }

    return (
        <>
            <div className="space-y-12 max-w-5xl mx-auto px-4">
                {categories.map((cat, categoryIdx) => (
                <div key={categoryIdx}>
                    <h2 className="text-forest text-3xl font-semibold mb-6 text-center">
                    {cat.category}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
                    {cat.products.map((product, productIdx) => (
                        <div
                        key={productIdx}
                        className="cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl-forest"
                        onClick={() => handleImageClick(categoryIdx, productIdx)}
                        >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="object-contain h-46 w-auto"
                        />
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={currentImages}
                index={currentIndex}
                animation={{ swipe: 250 }}
                carousel={{ finite: false }}
                styles={{
                    container: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(2px)",
                    },
                }}
                render={{
                    slide: ({ slide }) => (
                    <div className="flex items-center justify-center h-full w-full">
                        {/* @ts-ignore porque `src` es válido aunque no lo detecta bien */}
                        <img
                        src={slide.src}
                        alt={slide.alt || ""}
                        style={{
                            maxHeight: "80vh",
                            maxWidth: "90vw",
                            objectFit: "contain",
                        }}
                        />
                    </div>
                    ),
                }}
            />
        </>
    )
}
