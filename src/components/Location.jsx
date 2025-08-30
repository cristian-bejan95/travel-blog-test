import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Location({ location }) {
  return (
    <Card>
      <Carousel>
        <CarouselContent>
          {location.images.map((image) => (
            <CarouselItem>
              <img
                className="h-[250px] w-[250px] rounded-md object-cover"
                src={image}
                alt="Image"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Card>
  );
}

export default Location;
