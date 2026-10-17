import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Linked card for a single discovery. Expects data already checked by
 * `isValidPersona` in `src/data/personas.js`.
 * @param {import("@/data/personas").Discovery} props
 */
export default function DiscoveryCard({ title, date, summary, href }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Card className="max-w-lg h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:[box-shadow:0_0_0_1px_rgba(34,197,94,0.2)]">
        <CardHeader className="text-center">
          <CardTitle className="text-lg lg:text-2xl font-serif">{title}</CardTitle>
          <CardDescription className="text-sm md:text-base">{date}</CardDescription>
          <CardContent className="items-center pt-4 px-4 pb-4">
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 font-serif">
              {summary}
            </p>
          </CardContent>
        </CardHeader>
      </Card>
    </Link>
  );
}
