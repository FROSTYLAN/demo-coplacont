const TipoVentaEnum = {
  CONTADO: "contado",
  CREDITO: "credito",
} as const;

const TipoProductoVentaEnum = {
  MERCADERIA: "mercaderia",
  SERVICIOS: "servicios",
} as const;

const TipoComprobanteEnum = {
  FACTURA: "FACTURA",
  BOLETA: "BOLETA",
  NOTA_SALIDA: "NOTA DE SALIDA",
  NOTA_CREDITO: "nc",
  NOTA_DEBITO: "nd",
} as const;

const MonedaEnum = {
  SOL: "sol",
  DOLAR: "dol",
} as const;

const ProductoEnum = {
  PRODUCTO_A: "prod-001",
  PRODUCTO_B: "prod-002",
  SERVICIO_A: "serv-001",
  SERVICIO_B: "serv-002",
} as const;

const UnidadMedidaEnum = {
  UNIDAD: "und",
  KILOGRAMO: "kg",
  METRO: "m",
  LITRO: "lt",
  CAJA: "cja",
} as const;


export type TipoVentaType = (typeof TipoVentaEnum)[keyof typeof TipoVentaEnum];
export type TipoProductoVentaType = (typeof TipoProductoVentaEnum)[keyof typeof TipoProductoVentaEnum];
export type TipoComprobanteType =
  (typeof TipoComprobanteEnum)[keyof typeof TipoComprobanteEnum];
export type MonedaType = (typeof MonedaEnum)[keyof typeof MonedaEnum];
export type ProductoType = (typeof ProductoEnum)[keyof typeof ProductoEnum];
export type UnidadMedidaType =
  (typeof UnidadMedidaEnum)[keyof typeof UnidadMedidaEnum];

export {
  TipoVentaEnum,
  TipoProductoVentaEnum,
  TipoComprobanteEnum,
  MonedaEnum,
  ProductoEnum,
  UnidadMedidaEnum,
}