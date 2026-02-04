"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

/**
 * GenericAlertDialog component provides a reusable alert dialog
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.trigger - Element that triggers the dialog
 * @param {string} [props.title=''] - Dialog title
 * @param {string} [props.description=''] - Dialog description
 * @param {React.ReactNode} [props.footerActions=null] - Actions for the footer
 * @returns {JSX.Element} The alert dialog component
 */
export default function GenericAlertDialog({
  trigger,
  title = '',
  description = '',
  footerActions = null,
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>{footerActions}</AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
