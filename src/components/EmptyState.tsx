import { Card, CardContent } from './ui/card';
import { Coffee } from 'lucide-react';

export function EmptyState() {
  return (
    <Card>
      <CardContent className="text-center py-8">
        <Coffee className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl mb-2">No cafes found</h3>
        <p className="text-muted-foreground">
          Try adjusting your search criteria to find more cafes.
        </p>
      </CardContent>
    </Card>
  );
}