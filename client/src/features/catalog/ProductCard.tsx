import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, CardHeader, Avatar } from "@material-ui/core";
import { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar  sx={{bgcolor: 'primary.main'}}>
              {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: {fontweight: 'bold', color: 'primary.light'}
        }}
      />

    <CardActionArea>
      <CardMedia
        sx={{ height : 140, backgroundSize: 'contain', bgcolor: 'white'}}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom  color='secondary' variant="h5" component="h5">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Add to cart
      </Button>
      <Button component={Link} to={`/catalog/${product.id}`} size="small" color="primary">
        View
      </Button>
    </CardActions>
  </Card>
  );
}
