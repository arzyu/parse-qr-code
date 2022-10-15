import Jimp from "jimp";
import jsQR from "jsqr";

export const parseQRCode = async (filePath: string): Promise<string> => {
  const image = await Jimp.read(filePath);
  const { data, width, height } = image?.bitmap;
  const qrInfo = data ? jsQR(new Uint8ClampedArray(data), width, height) : null;

  return qrInfo ? qrInfo.data : "";
};
