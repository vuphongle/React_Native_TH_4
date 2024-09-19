import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [quantity, setQuantity] = useState(1);
  const [discountCode, setDiscountCode] = useState("");
  const price = 141800;
  const oldPrice = 200000;
  const discountedPrice = discountCode === "DISCOUNT10" ? price * 0.9 : price;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", padding: 20 }}>
        <View style={styles.bookRow}>
          <Image source={require("./img/book.png")} style={styles.image} />
          <View style={styles.bookInfo}>
            <Text style={styles.title}>Nguyên hàm, tích phân và ứng dụng</Text>
            <Text style={styles.subtitle}>Cung cấp bởi Tiki Trading</Text>
            <Text style={styles.price}>
              {discountedPrice.toLocaleString("vi-VN")} đ
            </Text>
            <Text style={styles.oldPrice}>
              {oldPrice.toLocaleString("vi-VN")} đ
            </Text>

            <View style={styles.inputRow}>
              <View style={styles.quantityControls}>
                <TouchableOpacity
                  onPress={decreaseQuantity}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity
                  onPress={increaseQuantity}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text style={styles.buyAfter}>Mua sau</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.viewDetail}>
          <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
            Mã giảm giá đã lưu
          </Text>
          <Text style={{ color: "blue", fontSize: 18, fontWeight: "bold" }}>
            Xem tại đây
          </Text>
        </View>

        <View style={styles.applyDiscount}>
          <View style={styles.discountInputContainer}>
            <Image
              source={require("./img/yellow_block.png")}
              style={styles.discountImage}
            />
            <TextInput
              style={styles.discountInput}
              placeholder="Mã giảm giá"
              value={discountCode}
              onChangeText={setDiscountCode}
              placeholderTextColor="#000"
            />
          </View>

          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.giftVoucher}>
        <Text style={styles.giftVoucherText}>
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?{" "}
        </Text>
        <Text style={styles.linkText}>Nhập tại đây?</Text>
      </View>

      <View style={styles.summary}>
        <View style={styles.pricingRow}>
          <Text style={styles.label}>Tạm tính</Text>
          <Text style={styles.priceValue}>
            {price.toLocaleString("vi-VN")} đ
          </Text>
        </View>
        <View />
      </View>

      <View style={styles.total}>
        <View style={styles.pricingRow}>
          <Text style={[styles.label, { color: "#808080" }]}>Thành tiền</Text>
          <Text style={styles.finalPrice}>
            {(discountedPrice * quantity).toLocaleString("vi-VN")} đ
          </Text>
        </View>
        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => Alert.alert("Bạn đã đặt hàng!")}
        >
          <Text style={styles.orderButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(196, 196, 196)",
    flex: 1,
  },
  bookRow: {
    backgroundColor: "white",
    flexDirection: "row",
    marginBottom: 20,
  },
  image: {
    width: 170,
    height: 210,
    marginRight: 10,
  },
  bookInfo: {
    flex: 1,
    justifyContent: "start",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    color: "red",
    fontSize: 26,
    fontWeight: "bold",
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "gray",
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
  inputRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#ccc",
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  quantityButtonText: {
    fontSize: 20,
    marginHorizontal: 7,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  applyDiscount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  discountInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 60,
  },
  discountImage: {
    width: 50,
    height: 30,
    marginRight: 10,
  },
  discountInput: {
    fontSize: 30,
    fontWeight: "bold",
    flex: 1,
  },
  summary: {
    marginTop: 50,
    backgroundColor: "white",
    alignItems: "flex-end",
    padding: 10,
    paddingLeft: 20,
  },
  total: {
    marginTop: 200,
    padding: 20,
    backgroundColor: "white",
  },
  pricingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    marginBottom: 5,
  },
  label: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  priceValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    textAlign: "right",
    flex: 1,
  },
  finalPrice: {
    fontSize: 30,
    color: "#FF0000",
    fontWeight: "bold",
    textAlign: "right",
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 15,
  },
  giftVoucher: {
    flexDirection: "row",
    borderColor: "#D1D1D1",
    backgroundColor: "white",
    borderWidth: 1,
    marginTop: 50,
    padding: 20,
    gap: 20,
  },
  giftVoucherText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  linkText: {
    fontSize: 16,
    color: "#007BFF",
    fontWeight: "bold",
  },
  buyAfter: {
    paddingRight: 20,
    color: "blue",
    fontSize: 16,
    fontWeight: "bold",
  },
  viewDetail: {
    backgroundColor: "white",
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
  },
  applyButton: {
    backgroundColor: "blue",
    padding: 10,
    marginLeft: 10,
  },
  applyButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  orderButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 40,
  },
  orderButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold", 
  },
});
