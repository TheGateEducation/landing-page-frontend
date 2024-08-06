import { THEGATE_EDUCATION_API_DOMAIN } from "../config/env";

class StudentsRecordsService {
    async createStudentRecord(data: any): Promise<any> {
        try {
            const response = await fetch(`${THEGATE_EDUCATION_API_DOMAIN}/api-students`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "HTTP_METHOD": "POST",
                    "created_at": new Date().toISOString(),
                    "updated_at": new Date().toISOString(),
                    "student": data
                })
            });
            if (!response.ok) {
                throw new Error('Failed to create student record');
            }
            const responseData = await response.json();
            return responseData;
        } catch (error) {
            throw error;
        }
    }
}

export default StudentsRecordsService;