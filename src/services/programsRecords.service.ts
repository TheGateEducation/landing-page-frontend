import { createContext, useEffect, useState } from "react";
import { THEGATE_EDUCATION_API_DOMAIN } from "../config/env";

class ProgramsRecordsService {
    async getProgramsRecords(programs: string[]): Promise<any> { //Is this correct?
        try {
            const response = await fetch(`${THEGATE_EDUCATION_API_DOMAIN}/api-programs`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "HTTP_METHOD": "GET",
                    "programs": programs
                })
            });
            if (!response.ok) {
                throw new Error('Failed to fetch programs records');
            }
            const responseData = await response.json();
            return JSON.parse(responseData.body);
        } catch (error) {
            throw error;
        }
    }
}


export default ProgramsRecordsService;