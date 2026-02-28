import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Validates discovery component props
 * @param {Object} props - Component props
 * @returns {boolean} True if all required props are valid
 */
function validateDiscoveryProps(props) {
  return (
    props &&
    typeof props.header === "string" &&
    props.header.trim().length > 0 &&
    typeof props.desc === "string" &&
    props.desc.trim().length > 0 &&
    typeof props.childDesc === "string" &&
    props.childDesc.trim().length > 0 &&
    typeof props.hrefto === "string" &&
    props.hrefto.trim().length > 0
  );
}

/**
 * Discoveries component displays a card with discovery information
 * Features:
 * - Displays discovery information in a card format
 * - Hover effects and transitions
 * - External link with proper rel attributes
 * - Comprehensive prop validation
 * 
 * @param {Object} props - Component props
 * @param {string} props.header - Header/title of the discovery
 * @param {string} props.desc - Description/date of the discovery
 * @param {string} props.childDesc - Shorter description
 * @param {string} props.hrefto - URL to link to
 * @returns {JSX.Element|null} The discovery card or null if props are invalid
 */
export default function Discoveries({ header, desc, childDesc, hrefto }) {
  // Validate props
  if (!validateDiscoveryProps({ header, desc, childDesc, hrefto })) {
    console.warn("Missing or invalid props for Discoveries component", {
      header,
      desc,
      childDesc,
      hrefto,
    });
    return null;
  }

  return (
    <Link
      href={hrefto}
      target="_blank"
      rel="noopener noreferrer"
      passHref
    >
      <Card className="max-w-md h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:bg-accent/50">
        <CardHeader className="text-center">
          <CardTitle className="text-lg lg:text-2xl font-serif">
            {header}
          </CardTitle>
          <CardDescription className="text-sm md:text-base">
            {desc}
          </CardDescription>
          <CardContent className="items-center pt-4">
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
              {childDesc}
            </p>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
}
