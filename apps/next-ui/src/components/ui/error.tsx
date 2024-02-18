import { Alert, AlertDescription, AlertTitle } from './alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export const ErrorAlert = ({ message }: { message: string }) => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          { message }
        </AlertDescription>
      </Alert>
    </div>
  )
}
