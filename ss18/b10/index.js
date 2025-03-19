let num = +prompt("Mời bạn nhập số từ (0-999): ");
if (num >= 0 && num <= 999) {
    if (num < 10) {
        // Xử lý số có 1 chữ số
        switch (num) {
            case 0:
                console.log("không");
                break;
            case 1:
                console.log("một");
                break;
            case 2:
                console.log("hai");
                break;
            case 3:
                console.log("ba");
                break;
            case 4:
                console.log("bốn");
                break;
            case 5:
                console.log("năm");
                break;
            case 6:
                console.log("sáu");
                break;
            case 7:
                console.log("bảy");
                break;
            case 8:
                console.log("tám");
                break;
            case 9:
                console.log("chín");
                break;
        }
    } else if (num >= 10 && num < 100) {
        let result = "";
        let tens = Math.floor(num / 10);
        let units = num % 10;
        switch (tens) {
            case 1:
                result += "mười";
                break;
            case 2:
                result += "hai mươi";
                break;
            case 3:
                result += "ba mươi";
                break;
            case 4:
                result += "bốn mươi";
                break;
            case 5:
                result += "năm mươi";
                break;
            case 6:
                result += "sáu mươi";
                break;
            case 7:
                result += "bảy mươi";
                break;
            case 8:
                result += "tám mươi";
                break;
            case 9:
                result += "chín mươi";
                break;
        }
        if (units !== 0) {
            switch (units) {
                case 0:
                    result += " không";
                    break;
                case 1:
                    result += " một";
                    break;
                case 2:
                    result += " hai";
                    break;
                case 3:
                    result += " ba";
                    break;
                case 4:
                    result += " bốn";
                    break;
                case 5:
                    result += " năm";
                    break;
                case 6:
                    result += " sáu";
                    break;
                case 7:
                    result += " bảy";
                    break;
                case 8:
                    result += " tám";
                    break;
                case 9:
                    result += " chín";
                    break;
            }
        }
        console.log(result.trim());
    } else if (num >= 100) {
        let hundreds = Math.floor(num / 100);
        let remainder = num % 100;
        let result = "";

        // Xử lý phần hàng trăm
        switch (hundreds) {
            case 1:
                result += "một trăm";
                break;
            case 2:
                result += "hai trăm";
                break;
            case 3:
                result += "ba trăm";
                break;
            case 4:
                result += "bốn trăm";
                break;
            case 5:
                result += "năm trăm";
                break;
            case 6:
                result += "sáu trăm";
                break;
            case 7:
                result += "bảy trăm";
                break;
            case 8:
                result += "tám trăm";
                break;
            case 9:
                result += "chín trăm";
                break;
        }

        // Xử lý phần chục và đơn vị (dùng lại logic đã sửa cho num < 100)
        if (remainder !== 0) {
            if (remainder < 10) {
                // Nếu chỉ còn đơn vị
                switch (remainder) {
                    case 1:
                        result += " lẻ một";
                        break;
                    case 2:
                        result += " lẻ hai";
                        break;
                    case 3:
                        result += " lẻ ba";
                        break;
                    case 4:
                        result += " lẻ bốn";
                        break;
                    case 5:
                        result += " lẻ năm";
                        break;
                    case 6:
                        result += " lẻ sáu";
                        break;
                    case 7:
                        result += " lẻ bảy";
                        break;
                    case 8:
                        result += " lẻ tám";
                        break;
                    case 9:
                        result += " lẻ chín";
                        break;
                }
            } else {
                // Gọi lại logic xử lý số 2 chữ số
                let tens = Math.floor(remainder / 10);
                let units = remainder % 10;

                switch (tens) {
                    case 1:
                        result += " mười";
                        break;
                    case 2:
                        result += " hai mươi";
                        break;
                    case 3:
                        result += " ba mươi";
                        break;
                    case 4:
                        result += " bốn mươi";
                        break;
                    case 5:
                        result += " năm mươi";
                        break;
                    case 6:
                        result += " sáu mươi";
                        break;
                    case 7:
                        result += " bảy mươi";
                        break;
                    case 8:
                        result += " tám mươi";
                        break;
                    case 9:
                        result += " chín mươi";
                        break;
                }

                if (units !== 0) {
                    switch (units) {
                        case 0:
                            result += " không";
                            break;
                        case 1:
                            result += " một";
                            break;
                        case 2:
                            result += " hai";
                            break;
                        case 3:
                            result += " ba";
                            break;
                        case 4:
                            result += " bốn";
                            break;
                        case 5:
                            result += " năm";
                            break;
                        case 6:
                            result += " sáu";
                            break;
                        case 7:
                            result += " bảy";
                            break;
                        case 8:
                            result += " tám";
                            break;
                        case 9:
                            result += " chín";
                            break;
                    }
                }
            }
        }
        console.log(result.trim());
    }
} else {
    console.log("Bạn phải nhập số từ 0-999");
}
