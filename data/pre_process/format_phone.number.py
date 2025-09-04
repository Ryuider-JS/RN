import pandas as pd
import re

def format_phone_number(phone_number):
    """
    다양한 형식의 전화번호 문자열을 '010-1234-5678' 형식으로 변환합니다.
    
    Args:
        phone_number (str): 변환할 전화번호 문자열.
        
    Returns:
        str: 표준 형식으로 변환된 전화번호. 변환 불가 시 원본 반환.
    """
    # 입력값이 문자열이 아니면 그대로 반환 (NaN 등 처리)
    if not isinstance(phone_number, str):
        return phone_number

    # 1. 숫자 이외의 모든 문자를 제거합니다.
    digits = re.sub(r'\D', '', phone_number)

    # 2. 예외 처리: '0'으로 시작하지 않는 10자리 번호는 앞에 '0'을 붙여줍니다.
    if len(digits) == 10 and digits.startswith('1'):
        digits = '0' + digits

    # 3. 11자리 휴대폰 번호 형식에 맞는 경우, 표준 형식으로 재조립합니다.
    if len(digits) == 11 and digits.startswith('01'):
        formatted_number = f"{digits[0:3]}-{digits[3:7]}-{digits[7:11]}"
        return formatted_number
    
    # 위 조건에 맞지 않는 경우 (일반 전화, 형식 오류 등), 원본을 그대로 반환합니다.
    return phone_number

# --- 메인 실행 로직 ---
if __name__ == "__main__":
    # 처리할 파일 경로 (실제 파일 이름으로 수정 필요)
    # file_path = "2022_귤.xlsx - 귤 주문서🍊.csv.csv"
    file_path = "../excel/2022_귤.xlsx"
    
    try:
        df = pd.read_excel(file_path)

        # 실제 파일의 연락처 컬럼명 (정확하게 입력해야 합니다)
        phone_column_name = "🍊수령인 연락처 \n: 택배사 배송 관련 문자 발송- 번호 양식 엄수 ex/010-1234-5678 (숫자만 배열x)"

        if phone_column_name not in df.columns:
            print(f"오류: '{phone_column_name}' 컬럼을 찾을 수 없습니다. 컬럼명을 확인해주세요.")
        else:
            # 비교를 위해 원본 연락처를 새 컬럼에 복사
            df['original_phone'] = df[phone_column_name]
            
            # 함수를 적용하여 전화번호 형식을 변환
            df[phone_column_name] = df[phone_column_name].apply(format_phone_number)
            
            # 결과 확인 (상위 20개)
            print("--- 전화번호 형식 변환 결과 (상위 20개) ---")
            print(df[['original_phone', phone_column_name]].head(20).to_string())

    except FileNotFoundError:
        print(f"오류: '{file_path}' 파일을 찾을 수 없습니다. 파일 이름과 경로를 확인해주세요.")
    except Exception as e:
        print(f"오류가 발생했습니다: {e}")
