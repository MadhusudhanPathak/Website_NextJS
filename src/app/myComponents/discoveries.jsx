import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Discoveries({ header, desc, childDesc, hrefto }) {
  return (
    <Link href={hrefto} target="_blank" passHref>
            <Card className="max-w-md h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        <CardHeader className="text-center">
          <CardTitle className="text-lg lg:text-2xl font-serif">
            {header}
          </CardTitle>
          <CardDescription>{desc}</CardDescription>
          <CardContent className="items-center">
            <p className="text-sm font-comic-sans text-gray-600 dark:text-gray-300">{childDesc}</p>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
}
