import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Discoveries component displays a card with discovery information
 * @param {Object} props - Component props
 * @param {string} props.header - Header/title of the discovery
 * @param {string} props.desc - Description of the discovery
 * @param {string} props.childDesc - Shorter description
 * @param {string} props.hrefto - URL to link to
 * @returns {JSX.Element|null} The discovery card or null if props are invalid
 */
export default function Discoveries({ header, desc, childDesc, hrefto }) {
  // Validate props
  if (!header || !desc || !childDesc || !hrefto) {
    console.warn("Missing required props for Discoveries component", { header, desc, childDesc, hrefto });
    return null;
  }

  return (
    <Link href={hrefto} target="_blank" rel="noopener noreferrer" passHref>
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
