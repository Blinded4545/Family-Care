import React, { useState } from "react"
import type { ProductCategory } from "./types"
import Lightbox from "yet-another-react-lightbox"
import Captions from "yet-another-react-lightbox/plugins/captions"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/captions.css";

interface ProductGridProps {
    categories: ProductCategory[]
}

export const ProductLister: React.FC<ProductGridProps> = ({ categories }) => {
    const [open, setOpen] = useState(false)

    const [currentImages, setCurrentImages] = useState<{ src: string, title?: string, description:string }[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)

    const [showToggle, setShowToggle] = React.useState(false);
    const [descriptionMaxLines, setDescriptionMaxLines] = React.useState(5);
    const [descriptionTextAlign, setDescriptionTextAlign] = React.useState<"start" | "end" | "center">("center");
    
    const handleImageClick = (categoryIndex: number, imageIndex: number) => {
        const images = categories[categoryIndex].products.map((p) => ({
            src: p.image,
            title: p.name,
            description: p.description
        }))

        setCurrentImages(images)
        setCurrentIndex(imageIndex)
        setShowToggle(false)
        setDescriptionMaxLines(5)
        setDescriptionTextAlign("center")
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
                    <div
                    className="
                        flex
                        flex-wrap
                        justify-center
                        gap-6
                    "
                    >
                    {cat.products.map((product, productIdx) => (
                        <div
                        key={productIdx}
                        className="
                            cursor-pointer
                            transition-transform
                            hover:scale-105
                            flex-shrink-0
                            basis-full
                            sm:basis-1/2
                            md:basis-1/3
                            max-w-[300px]
                            border-0
                        "
                        onClick={() => handleImageClick(categoryIdx, productIdx)}
                        >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="object-contain h-[200px] min-w-[200px] mx-auto hover:shadow-2xl-forest"
                        />
                        <p className="mt-2 text-forest text-base font-bold uppercase text-center">
                            {product.name}
                        </p>
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

                plugins={[Captions]}
                styles={{
                    container: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    backdropFilter: "blur(2px)",
                    },
                }}
                captions={{ showToggle, descriptionTextAlign, descriptionMaxLines}}

                render={{
                    slide: ({ slide }) => (
                    <div className="flex items-center justify-center h-full w-full">
                        <img
                        src={slide.src}
                        alt={slide.description?.toString() || ""}
                        style={{
                            maxHeight: "80vh",
                            maxWidth: "90vw",
                            objectFit: "contain",
                            textAlign: "center"
                        }}
                        />
                    </div>
                    ),
                }}
            />
        </>
    )
}
