import { StyleSheet, Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Body from '../../../../components/Body/Body.components'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../../../../apis/userApi'
import { update_occupation } from '../../../../store/my_dataSlice';
import Toast from 'react-native-simple-toast'


const { width, height } = Dimensions.get('window')

const Occupation = ({ route }) => {
    const { setindustries, setoccupation } = route.params;
    const navigation = useNavigation()
    const [selected_industries, setSelected_industries] = useState(0)
    const [selected_occupation, setSelected_occupation] = useState('Software Developer')
    const my_data = useSelector(state => state.my_data.my_profile_data)
    const dispatch = useDispatch()

    const handleConfirm = () => {
        const name = 'occupation', value = selected_occupation
        const data = {
            name, value
        }
        updateProfile(my_data?.auth_token, data)
            .then((res) => {
                Toast.show(res.message, Toast.SHORT)
                dispatch(update_person_height(value))
            })
            .catch((err) => {
                console.log(err.message)
            })
        navigation.goBack()
    }
    const occupations = [
        {
            industry: "Information Technology (IT)",
            occupations: [
                { name: "Software Developer" },
                { name: "Data Analyst" },
                { name: "Network Administrator" },
                { name: "Cybersecurity Specialist" },
                { name: "UX/UI Designer" }
                // Add more occupations in the Information Technology (IT) industry
            ]
        },
        {
            industry: "Healthcare and Pharmaceuticals",
            occupations: [
                { name: "Physician" },
                { name: "Nurse" },
                { name: "Pharmacist" },
                { name: "Dentist" },
                { name: "Physical Therapist" }
                // Add more occupations in the Healthcare and Pharmaceuticals industry
            ]
        },
        {
            industry: "Finance and Banking",
            occupations: [
                { name: "Accountant" },
                { name: "Financial Analyst" },
                { name: "Investment Banker" },
                { name: "Loan Officer" },
                { name: "Financial Advisor" }
                // Add more occupations in the Finance and Banking industry
            ]
        },
        {
            industry: "Manufacturing",
            occupations: [
                { name: "Mechanical Engineer" },
                { name: "Production Supervisor" },
                { name: "Quality Control Inspector" },
                { name: "Assembly Line Worker" },
                { name: "Industrial Designer" }
                // Add more occupations in the Manufacturing industry
            ]
        },
        {
            industry: "Education",
            occupations: [
                { name: "Teacher" },
                { name: "Professor" },
                { name: "School Counselor" },
                { name: "Librarian" },
                { name: "Special Education Instructor" }
                // Add more occupations in the Education industry
            ]
        },
        {
            industry: "Retail and E-commerce",
            occupations: [
                { name: "Store Manager" },
                { name: "Sales Associate" },
                { name: "E-commerce Specialist" },
                { name: "Inventory Coordinator" },
                { name: "Visual Merchandiser" }
                // Add more occupations in the Retail and E-commerce industry
            ]
        },
        {
            industry: "Hospitality and Tourism",
            occupations: [
                { name: "Hotel Manager" },
                { name: "Tour Guide" },
                { name: "Event Planner" },
                { name: "Restaurant Chef" },
                { name: "Travel Agent" }
                // Add more occupations in the Hospitality and Tourism industry
            ]
        },
        {
            industry: "Construction",
            occupations: [
                { name: "Architect" },
                { name: "Civil Engineer" },
                { name: "Construction Manager" },
                { name: "Electrician" },
                { name: "Plumber" }
                // Add more occupations in the Construction industry
            ]
        },
        {
            industry: "Transportation and Logistics",
            occupations: [
                { name: "Truck Driver" },
                { name: "Logistics Coordinator" },
                { name: "Airline Pilot" },
                { name: "Freight Forwarder" },
                { name: "Warehouse Manager" }
                // Add more occupations in the Transportation and Logistics industry
            ]
        },
        {
            industry: "Energy and Utilities",
            occupations: [
                { name: "Electrical Engineer" },
                { name: "Power Plant Operator" },
                { name: "Renewable Energy Specialist" },
                { name: "Utility Technician" },
                { name: "Energy Auditor" }
                // Add more occupations in the Energy and Utilities industry
            ]
        },
        {
            industry: "Media and Entertainment",
            occupations: [
                { name: "Journalist" },
                { name: "Actor" },
                { name: "Graphic Designer" },
                { name: "Film Director" },
                { name: "Musician" }
                // Add more occupations in the Media and Entertainment industry
            ]
        },
        {
            industry: "Telecommunications",
            occupations: [
                { name: "Telecom Engineer" },
                { name: "Network Technician" },
                { name: "Telecom Sales Representative" },
                { name: "Telecom Project Manager" },
                { name: "Customer Support Specialist" }
                // Add more occupations in the Telecommunications industry
            ]
        },
        {
            industry: "Automotive",
            occupations: [
                { name: "Automobile Mechanic" },
                { name: "Automotive Engineer" },
                { name: "Car Salesperson" },
                { name: "Auto Body Technician" },
                { name: "Car Detailer" }
                // Add more occupations in the Automotive industry
            ]
        },
        {
            industry: "Agriculture",
            occupations: [
                { name: "Farm Manager" },
                { name: "Agricultural Scientist" },
                { name: "Livestock Farmer" },
                { name: "Crop Consultant" },
                { name: "Agricultural Machinery Operator" }
                // Add more occupations in the Agriculture industry
            ]
        },
        {
            industry: "Real Estate",
            occupations: [
                { name: "Real Estate Agent" },
                { name: "Property Manager" },
                { name: "Real Estate Appraiser" },
                { name: "Real Estate Developer" },
                { name: "Leasing Consultant" }
                // Add more occupations in the Real Estate industry
            ]
        },
        {
            industry: "Consulting",
            occupations: [
                { name: "Management Consultant" },
                { name: "IT Consultant" },
                { name: "Financial Consultant" },
                { name: "HR Consultant" },
                { name: "Marketing Consultant" }
                // Add more occupations in the Consulting industry
            ]
        },
        {
            industry: "Non-profit and Social Services",
            occupations: [
                { name: "Social Worker" },
                { name: "Non-profit Manager" },
                { name: "Fundraising Coordinator" },
                { name: "Volunteer Coordinator" },
                { name: "Community Outreach Specialist" }
                // Add more occupations in the Non-profit and Social Services industry
            ]
        },
        {
            industry: "Government and Public Administration",
            occupations: [
                { name: "Civil Servant" },
                { name: "Policy Analyst" },
                { name: "Public Relations Officer" },
                { name: "City Planner" },
                { name: "Legislative Assistant" }
                // Add more occupations in the Government and Public Administration industry
            ]
        },
        {
            industry: "Professional Services (Law, Accounting, etc.)",
            occupations: [
                { name: "Lawyer" },
                { name: "Accountant" },
                { name: "Financial Advisor" },
                { name: "HR Consultant" },
                { name: "Marketing Consultant" }
                // Add more occupations in the Professional Services industry
            ]
        },
        {
            industry: "Creative Arts and Design",
            occupations: [
                { name: "Graphic Designer" },
                { name: "Art Director" },
                { name: "Photographer" },
                { name: "Fashion Designer" },
                { name: "Interior Designer" }
                // Add more occupations in the Creative Arts and Design industry
            ]
        }
        // Add more industries and their respective occupations
    ];











    return (
        <Body style={{ flex: 1 }}>

            <Body applyPadding={false} style={styles.header}>
                <Body applyPadding={false} style={styles.leftHeader}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <AntDesign name='arrowleft' size={20} />
                    </TouchableOpacity>
                    <Text style={[styles.headerText, { marginTop: 0 }]}>
                        Occupation
                    </Text>
                </Body>
                <TouchableOpacity
                    onPress={handleConfirm}
                >
                    <Text style={[styles.headerText, { color: 'red' }]}>save</Text>
                </TouchableOpacity>
            </Body>


            <Body applyPadding={false} style={styles.body}>
                <Body applyPadding={false}>
                    <FlatList
                        data={occupations}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    setSelected_industries(index)
                                }}
                                style={styles.industry}>
                                <Text style={{
                                    fontSize: 16,
                                    color: selected_industries == index ? '#FC1B87' : 'black'
                                }}>
                                    {item.industry}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />

                </Body>
                <Body applyPadding={false}>
                    <FlatList
                        data={occupations[selected_industries].occupations}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => { setSelected_occupation(item.name) }}
                                style={styles.industry}>
                                <Text style={{
                                    fontSize: 16,
                                    color: selected_occupation == item.name ? '#FC1B87' : 'black'

                                }}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </Body>
            </Body>

        </Body>
    )
}

export default Occupation

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 7,
        borderColor: 'rgba(217, 217, 217, 0.4)'
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000000',
        marginLeft: 25,
        marginTop: 5
    },
    leftHeader: {
        flexDirection: 'row',
    },
    industry: {
        width: width * 0.4,
        marginVertical: 7
    },
    body: {
        width: width,
        padding: width * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})