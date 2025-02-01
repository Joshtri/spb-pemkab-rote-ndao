import React, { FC, SVGProps } from "react";
import { Breadcrumb } from "flowbite-react";
import { Home } from "lucide-react";

type BreadcrumbItem = {
    href?: string | null;
    text: string;
    icon?: FC<SVGProps<SVGSVGElement>>;
    isActive?: boolean;
};

type BreadcrumbProps = {
    items: BreadcrumbItem[];
};

export const ReusableBreadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <Breadcrumb aria-label="Default breadcrumb example">
            {items.map((item, index) => (
                <Breadcrumb.Item
                    key={index}
                    href={item.isActive ? undefined : item.href || undefined}
                    icon={item.icon}
                    className={item.isActive ? "active" : ""}
                >
                    {item.text}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

// Example usage of the ReusableBreadcrumb component
export function Component() {
    const breadcrumbItems = [
        { href: "#", icon: Home, text: "Home" },
        { href: "#", text: "Projects" },
        { href: null, text: "Flowbite React", isActive: true }, // This will render as an active text item without a link
    ];

    return (
        <div>
            <ReusableBreadcrumb items={breadcrumbItems} />
        </div>
    );
}