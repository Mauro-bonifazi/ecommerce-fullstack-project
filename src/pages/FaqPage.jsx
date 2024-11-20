import {
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FaqPage() {
  return (
    <Container sx={{ marginTop: "64px" }}>
      <h4>Preguntas Frecuentes</h4>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ color: "#1578A2" }}>
            ¿Hay stock en todos los productos?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Si el producto deseado está en stock en nuestra tienda online, te
            permitirá seleccionarlo y agregarlo al carrito de compras
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>¿Los productos son todos originales?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Somos Apple Premium Reseller y todos nuestros productos Apple son
            nuevos y originales.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>¿Tienen garantía?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Los productos Apple tienen una garantía oficial de 12 meses, con la
            factura de compra emitida como distribuidores oficiales.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>¿Como realizar una compra online?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para realizar una compra en nuestra tienda online maximstore, seguí
            estos pasos: - Navegá por la tienda online y buscá el producto que
            deseas comprar. - Agregá los productos a tu carrito de compras. -
            Completá la información personal y de facturación requerida. -
            Seleccioná la opción “Retiro en el Local” o “Envío a Domicilio” y
            completá los datos correspondientes. - Revisá los artículos en tu
            carrito y procede a abonar. (Tenés 20 min para finalizar la compra)
            - Aceptá los Términos y Condiciones. (Podés elegir si querés recibir
            comunicaciones de marketing para conocer las novedades de la tienda)
            - Confirmá tu pedido seleccionando “Finalizar Compra” y realizá el
            pago desde la web por el medio de pago de tu preferencia
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>¿Cúles son los medios de pagos aceptados?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Se aceptan tarjetas de crédito y debito.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>
            ¿Cómo se si mi compra se realizo correctamente?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Una vez finalizada tu compra, vas a recibir un mail de confirmación
            con el número de pedido y los detalles del mismo.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>¿Realizan envios?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Si, realizamos envíos dentro del interior de Argentina, a través de
            la empresa de logística Andreani. (No incluye la provincia de Tierra
            del Fuego.)
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel2a-header"
        >
          <Typography>¿Cúanto tiempo tarda en llegar mi compra?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Dependiendo de la provincia y el peso de tu compra, puede tardar
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default FaqPage;
